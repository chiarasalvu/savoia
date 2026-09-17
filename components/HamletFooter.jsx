// Same copyright bar as the main Footer, in Puerto Hamlet's dark wood brown
// — one shade darker than HamletInfoBar above it, so the two bars read as
// the same family with a subtle step between them.
export default function HamletFooter() {
  return (
    <footer className="bg-hamlet-brown-dark p-5 text-center text-white">
      <p>Puerto Hamlet &copy; {new Date().getFullYear()} - Todos los derechos reservados</p>
    </footer>
  );
}
