#!/usr/bin/env python3
"""
Script para actualizar automáticamente la página estática de GitHub Pages
cuando se modifican README.md o QuantumResources.ipynb

Autor: Carlos Cárdenas
"""

import re
import json
import os
import sys
from datetime import datetime
from typing import List, Dict, Any
import argparse

class QuantumResourcesParser:
    def __init__(self):
        self.books = []
        self.qml_resources = []
        
    def parse_readme(self, readme_path: str = "README.md") -> Dict[str, Any]:
        """Parsea el archivo README.md y extrae la información"""
        print(f"📖 Parseando {readme_path}...")
        
        if not os.path.exists(readme_path):
            print(f"❌ Error: No se encontró el archivo {readme_path}")
            return {"books": [], "qml_resources": []}
        
        with open(readme_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Extraer recursos QML
        qml_resources = self._extract_qml_resources(content)
        
        # Extraer libros
        books = self._extract_books(content)
        
        print(f"✅ Extraídos {len(qml_resources)} recursos QML y {len(books)} libros")
        
        return {
            "books": books,
            "qml_resources": qml_resources,
            "last_update": datetime.now().isoformat(),
            "total_books": len(books),
            "total_qml_resources": len(qml_resources)
        }
    
    def _extract_qml_resources(self, content: str) -> List[Dict[str, str]]:
        """Extrae los recursos de QML del README"""
        resources = []
        
        # Buscar la sección de QML
        qml_section_match = re.search(r'## Quantum machine learning resources:(.*?)(?=# BOOKS|\Z)', content, re.DOTALL)
        if not qml_section_match:
            print("⚠️  No se encontró la sección de recursos QML")
            return resources
        
        qml_section = qml_section_match.group(1)
        
        # Extraer enlaces con títulos
        link_pattern = r'\[([^\]]+)\]\((https?://[^\)]+)\)'
        matches = re.findall(link_pattern, qml_section)
        
        for title, link in matches:
            # Determinar categoría basándose en el contenido
            category = self._categorize_qml_resource(title, link)
            
            # Determinar tipo
            resource_type = self._get_resource_type(title, link)
            
            # Generar descripción
            description = self._generate_description(title, resource_type)
            
            resources.append({
                "title": title.strip(),
                "link": link.strip(),
                "category": category,
                "type": resource_type,
                "description": description
            })
        
        return resources
    
    def _categorize_qml_resource(self, title: str, link: str) -> str:
        """Categoriza un recurso QML"""
        title_lower = title.lower()
        link_lower = link.lower()
        
        if any(word in title_lower for word in ['course', 'mooc', 'tutorial', 'learn']):
            return 'courses'
        elif any(word in title_lower for word in ['paper', 'arxiv', 'pdf']):
            return 'papers'
        elif any(word in link_lower for word in ['youtube', 'video', 'talk']):
            return 'videos'
        elif any(word in link_lower for word in ['github', 'gitlab', 'tool', 'pennylane']):
            return 'tools'
        else:
            return 'papers'  # default
    
    def _get_resource_type(self, title: str, link: str) -> str:
        """Determina el tipo de recurso"""
        link_lower = link.lower()
        title_lower = title.lower()
        
        if 'github' in link_lower:
            return 'GitHub'
        elif 'youtube' in link_lower:
            return 'Video'
        elif 'arxiv' in link_lower:
            return 'Research Paper'
        elif 'medium' in link_lower:
            return 'Article'
        elif any(word in title_lower for word in ['course', 'mooc']):
            return 'Course'
        elif 'tutorial' in title_lower:
            return 'Tutorial'
        elif 'talk' in title_lower:
            return 'Conference Talk'
        else:
            return 'Resource'
    
    def _generate_description(self, title: str, resource_type: str) -> str:
        """Genera una descripción automática para el recurso"""
        descriptions = {
            'GitHub': 'Repositorio de código y recursos',
            'Video': 'Video educativo sobre computación cuántica',
            'Research Paper': 'Paper de investigación académica',
            'Article': 'Artículo explicativo y educativo',
            'Course': 'Curso completo de aprendizaje',
            'Tutorial': 'Tutorial paso a paso',
            'Conference Talk': 'Presentación de conferencia',
            'Resource': 'Recurso educativo'
        }
        
        base_description = descriptions.get(resource_type, 'Recurso sobre computación cuántica')
        
        # Personalizar según el título
        if 'beginner' in title.lower() or 'introduction' in title.lower():
            return f"{base_description} para principiantes"
        elif 'advanced' in title.lower():
            return f"{base_description} avanzado"
        else:
            return base_description
    
    def _extract_books(self, content: str) -> List[Dict[str, Any]]:
        """Extrae los libros del README"""
        books = []
        
        # Buscar la tabla de libros
        books_section_match = re.search(r'# BOOKS(.*?)(?=- 💬|\Z)', content, re.DOTALL)
        if not books_section_match:
            print("⚠️  No se encontró la sección de libros")
            return books
        
        books_section = books_section_match.group(1)
        
        # Extraer filas de la tabla
        table_rows = re.findall(r'\|(\d{4})\|\s*\[([^\]]+)\]\(([^\)]+)\)', books_section)
        
        for year, title, link in table_rows:
            books.append({
                "year": int(year),
                "title": title.strip(),
                "link": link.strip(),
                "category": self._categorize_book(title)
            })
        
        # Ordenar por año descendente
        books.sort(key=lambda x: x['year'], reverse=True)
        
        return books
    
    def _categorize_book(self, title: str) -> str:
        """Categoriza un libro basándose en su título"""
        title_lower = title.lower()
        
        if any(word in title_lower for word in ['programming', 'python', 'code', 'developer']):
            return 'programming'
        elif any(word in title_lower for word in ['beginner', 'introduction', 'gentle', 'everyone']):
            return 'beginner'
        elif any(word in title_lower for word in ['academic', 'theory', 'mathematical', 'physics']):
            return 'academic'
        elif any(word in title_lower for word in ['business', 'industry', 'practical']):
            return 'business'
        else:
            return 'general'

    def update_javascript_data(self, data: Dict[str, Any], js_path: str = "docs/script.js"):
        """Actualiza los datos en el archivo JavaScript"""
        print(f"🔄 Actualizando {js_path}...")
        
        if not os.path.exists(js_path):
            print(f"❌ Error: No se encontró el archivo {js_path}")
            return
        
        with open(js_path, 'r', encoding='utf-8') as file:
            js_content = file.read()
        
        # Actualizar recursos QML
        qml_js = self._generate_qml_javascript(data['qml_resources'])
        js_content = re.sub(
            r'const qmlResources = \[.*?\];',
            f'const qmlResources = {qml_js};',
            js_content,
            flags=re.DOTALL
        )
        
        # Actualizar función de libros
        books_js = self._generate_books_javascript(data['books'])
        js_content = re.sub(
            r'function getBooksData\(\) \{.*?return \[.*?\];.*?\}',
            f'function getBooksData() {{\n    return {books_js};\n}}',
            js_content,
            flags=re.DOTALL
        )
        
        with open(js_path, 'w', encoding='utf-8') as file:
            file.write(js_content)
        
        print("✅ JavaScript actualizado")
    
    def _generate_qml_javascript(self, resources: List[Dict[str, str]]) -> str:
        """Genera el código JavaScript para los recursos QML"""
        js_objects = []
        for resource in resources:
            js_obj = "{\n"
            js_obj += f'        title: "{self._escape_js_string(resource["title"])}",\n'
            js_obj += f'        description: "{self._escape_js_string(resource["description"])}",\n'
            js_obj += f'        link: "{resource["link"]}",\n'
            js_obj += f'        category: "{resource["category"]}",\n'
            js_obj += f'        type: "{resource["type"]}"\n'
            js_obj += "    }"
            js_objects.append(js_obj)
        
        return "[\n    " + ",\n    ".join(js_objects) + "\n]"
    
    def _generate_books_javascript(self, books: List[Dict[str, Any]]) -> str:
        """Genera el código JavaScript para los libros"""
        js_objects = []
        for book in books:
            js_obj = "{\n"
            js_obj += f'            year: {book["year"]},\n'
            js_obj += f'            title: "{self._escape_js_string(book["title"])}",\n'
            js_obj += f'            link: "{book["link"]}",\n'
            js_obj += f'            category: "{book["category"]}"\n'
            js_obj += "        }"
            js_objects.append(js_obj)
        
        return "[\n        " + ",\n        ".join(js_objects) + "\n    ]"
    
    def _escape_js_string(self, s: str) -> str:
        """Escapa caracteres especiales para JavaScript"""
        return s.replace('"', '\\"').replace('\n', '\\n').replace('\r', '\\r')
    
    def update_html_metadata(self, data: Dict[str, Any], html_path: str = "docs/index.html"):
        """Actualiza metadatos en el HTML"""
        print(f"🔄 Actualizando metadatos en {html_path}...")
        
        if not os.path.exists(html_path):
            print(f"❌ Error: No se encontró el archivo {html_path}")
            return
        
        with open(html_path, 'r', encoding='utf-8') as file:
            html_content = file.read()
        
        # Actualizar contadores
        html_content = re.sub(
            r'<h3 id="qml-count">\d+\+</h3>',
            f'<h3 id="qml-count">{data["total_qml_resources"]}+</h3>',
            html_content
        )
        
        html_content = re.sub(
            r'<h3 id="books-count">\d+\+</h3>',
            f'<h3 id="books-count">{data["total_books"]}+</h3>',
            html_content
        )
        
        with open(html_path, 'w', encoding='utf-8') as file:
            file.write(html_content)
        
        print("✅ HTML actualizado")
    
    def generate_json_data(self, data: Dict[str, Any], json_path: str = "docs/data.json"):
        """Genera archivo JSON con todos los datos"""
        print(f"💾 Generando {json_path}...")
        
        with open(json_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=2, ensure_ascii=False)
        
        print("✅ JSON generado")

def main():
    parser = argparse.ArgumentParser(description='Actualizar página estática de Quantum Resources')
    parser.add_argument('--readme', default='README.md', help='Ruta del archivo README.md')
    parser.add_argument('--force', action='store_true', help='Forzar actualización aunque no haya cambios')
    parser.add_argument('--verbose', '-v', action='store_true', help='Modo verbose')
    
    args = parser.parse_args()
    
    print("🚀 Iniciando actualización de Quantum Resources...")
    print("=" * 50)
    
    # Verificar si existe la carpeta docs
    if not os.path.exists('docs'):
        print("❌ Error: La carpeta 'docs' no existe. Ejecuta este script desde la raíz del proyecto.")
        sys.exit(1)
    
    # Inicializar parser
    parser_obj = QuantumResourcesParser()
    
    try:
        # Parsear README
        data = parser_obj.parse_readme(args.readme)
        
        if not data['books'] and not data['qml_resources']:
            print("⚠️  No se encontraron datos para procesar")
            sys.exit(1)
        
        # Actualizar archivos
        parser_obj.update_javascript_data(data)
        parser_obj.update_html_metadata(data)
        parser_obj.generate_json_data(data)
        
        print("=" * 50)
        print("✅ Actualización completada exitosamente!")
        print(f"📊 Estadísticas:")
        print(f"   • Recursos QML: {data['total_qml_resources']}")
        print(f"   • Libros: {data['total_books']}")
        print(f"   • Última actualización: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        print("🌐 Tu sitio web está listo en: https://unimauro.github.io/QuantumResources/")
        
    except Exception as e:
        print(f"❌ Error durante la actualización: {str(e)}")
        if args.verbose:
            import traceback
            traceback.print_exc()
        sys.exit(1)

if __name__ == "__main__":
    main() 