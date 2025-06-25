#!/bin/bash

# Script para actualizar la página estática de Quantum Resources localmente
# Autor: Carlos Cárdenas

set -e  # Salir si cualquier comando falla

echo "🚀 Quantum Resources - Actualizador Local"
echo "=========================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "README.md" ]; then
    echo "❌ Error: Ejecuta este script desde la raíz del proyecto (donde está README.md)"
    exit 1
fi

# Verificar que Python está disponible
if ! command -v python3 &> /dev/null; then
    echo "❌ Error: Python 3 no está instalado"
    exit 1
fi

# Crear directorio docs si no existe
if [ ! -d "docs" ]; then
    echo "📁 Creando directorio docs..."
    mkdir -p docs
fi

# Ejecutar el script de actualización
echo "🔄 Ejecutando script de actualización..."
python3 update_docs.py --verbose

# Verificar que los archivos fueron generados
if [ ! -f "docs/index.html" ]; then
    echo "❌ Error: index.html no fue generado"
    exit 1
fi

if [ ! -f "docs/data.json" ]; then
    echo "❌ Error: data.json no fue generado"
    exit 1
fi

echo ""
echo "✅ ¡Actualización completada con éxito!"
echo ""

# Mostrar estadísticas si data.json existe
if [ -f "docs/data.json" ]; then
    echo "📊 Estadísticas:"
    python3 -c "
import json
try:
    with open('docs/data.json', 'r') as f:
        data = json.load(f)
    print(f'📚 Libros: {data.get(\"total_books\", 0)}')
    print(f'🧠 Recursos QML: {data.get(\"total_qml_resources\", 0)}')
    print(f'🕒 Última actualización: {data.get(\"last_update\", \"N/A\")}')
except Exception as e:
    print(f'Error leyendo estadísticas: {e}')
"
fi

echo ""
echo "🌐 Para probar localmente:"
echo "   1. cd docs"
echo "   2. python3 -m http.server 8000"
echo "   3. Abre http://localhost:8000 en tu navegador"
echo ""
echo "🚀 Para desplegar en GitHub Pages:"
echo "   1. git add ."
echo "   2. git commit -m 'Actualizar documentación'"
echo "   3. git push"
echo ""
echo "📡 Tu sitio estará disponible en:"
echo "   https://$(whoami).github.io/QuantumResources/" 