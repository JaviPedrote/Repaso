export default function ProfileView() {
  return (
    <form className="bg-white p-10 rounded-lg space-y-5" onSubmit={() => {}}>
      <legend className="text-2xl text-slate-800 text-center">
        Editar Información
      </legend>
      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Handle:</label>
        <input
          type="text"
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="handle o Nombre de Usuario"
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="description">Descripción:</label>
        <textarea
          className="border-none bg-slate-100 rounded-lg p-2"
          placeholder="Tu Descripción"
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="image" className="font-medium">
          Imagen:
        </label>
        <label
          htmlFor="image"
          className="border bg-slate-100 rounded-lg p-2 text-center cursor-pointer hover:bg-slate-200"
        >
          Seleccionar archivo
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {}}
        />
      </div>

      <input
        type="submit"
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
        value="Guardar Cambios"
      />
    </form>
  );
}
