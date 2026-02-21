import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md text-center">
        {/* Un toque de color suave para el fondo del código de error */}
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Error 404</p>
        
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Página no encontrada
        </h1>
        
        <p className="mt-4 text-base text-gray-500">
          Lo sentimos, no pudimos encontrar la página que buscas. Revisa la URL o intenta volver al panel principal.
        </p>
        <br />
        <br />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
          >
            Regresar al inicio
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Volver atrás
          </button>
        </div>
      </div>

      {/* Footer minimalista opcional */}
      <footer className="absolute bottom-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LunaDev
      </footer>
    </div>
  );
}