import os

EXTENSIONES = {'.py', '.js', '.html', '.css', '.cs', '.jsx', '.tsx'}

IGNORAR = {
    'node_modules', '.git', 'venv', '__pycache__', 'dist', 'build',
    'fabric-samples', 'vendor', 'public', 'migrations', 'static',
    'media', 'tests', '.next', 'out', 'coverage', '__snapshots__'
}

# Ignora archivos que probablemente son generados o de librería
IGNORAR_ARCHIVOS = {'bundle.js', 'bundle.min.js', 'webpack.config.js'}

with open('codigo_completo.txt', 'w', encoding='utf-8') as salida:
    for raiz, carpetas, archivos in os.walk('.'):
        carpetas[:] = [c for c in carpetas if c not in IGNORAR]
        for archivo in archivos:
            if archivo in IGNORAR_ARCHIVOS:
                continue
            if os.path.splitext(archivo)[1].lower() in EXTENSIONES:
                ruta_completa = os.path.join(raiz, archivo)
                try:
                    with open(ruta_completa, 'r', encoding='utf-8', errors='ignore') as entrada:
                        contenido = entrada.read()
                        # Opcional: ignora archivos muy grandes (probablemente generados)
                        if len(contenido) > 50_000:
                            salida.write(f"\n\n=== ARCHIVO OMITIDO (muy grande): {ruta_completa} ===\n")
                            continue
                        salida.write(f"\n\n=== ARCHIVO: {ruta_completa} ===\n\n")
                        salida.write(contenido)
                except:
                    pass

print("¡Listo! Archivo 'codigo_completo.txt' generado.")