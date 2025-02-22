
export type auth = "autenticado" | "noAutenticado" | "cargando";

export type product = {
    category:{ id: number, name: string }
    id:number
    image:string
    inventory:number
    name:string
    price: number
}
