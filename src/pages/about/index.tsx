export default function AboutPage() {
  return (
    <>
     <h1 className="display-1 mb-5">About Page</h1>
     <h2>Authors</h2>
     <div className="d-flex justify-content-between my-4">
       <div className="mx-auto">
        <p>
          <a 
            href="https://github.com/jean182"
            rel="noopener noreferrer" 
            target="_blank"
          >
            Jean Aguilar
          </a>
        </p>
       </div>
       <div className="border-end border-secondary border-5" />
       <div className="mx-auto">
        <p>
          <a 
            href="https://github.com/mikesb21"
            rel="noopener noreferrer"
            target="_blank"
          >
            Michael Reyes
          </a>
        </p>
       </div>
     </div>
     <h3>Tech Stack</h3>
     <ul className="py-3">
       <li>Typescript</li>
       <li>React</li>
       <li>Graphql</li>
       <li>Apollo</li>
       <li>Bootstrap</li>
     </ul>
     <p className="lead py-3">Huge thanks to <a href="https://pokeapi.co/" rel="noopener noreferrer" target="_blank">PokéAPI</a> for providing the backend services</p>
    </>
  )
}
