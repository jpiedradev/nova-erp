import React from 'react';


function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex w-[700px] rounded-2xl shadow-lg overflow-hidden bg-white">
        
        {/* Izquierda */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-gray-700 p-6 text-white">
          <h1 className="text-2xl font-bold">BIENVENIDO</h1>
          <img src="/logo.png" alt="NovaERP" className="w-24 my-4" />
          <p className="text-lg">Nova ERP</p>
        </div>

        {/* Derecha */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">ACCESO</h2>
          
          <input
            type="text"
            placeholder="Usuario"
            className="mb-4 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-green-400"
          />
          
          <input
            type="password"
            placeholder="Contraseña"
            className="mb-6 w-full rounded-full border px-4 py-2 focus:ring-2 focus:ring-green-400"
          />
          
          <button className="w-full rounded-full bg-black text-white py-2 hover:bg-gray-800 transition">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login
