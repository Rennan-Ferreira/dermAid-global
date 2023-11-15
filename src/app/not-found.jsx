import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1 className="text-center">OOPS! 404!</h1>
        <div>
          <figure>
            <Image src="#" alt="nada" width={100} height={100}/>
          </figure>
        </div>
        <p className="text-center">Página não encontrada!</p>
    </div>
  )
}