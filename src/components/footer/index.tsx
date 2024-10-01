export function Footer() {
  return (
    <footer className="w-full py-4 px-[25px] flex justify-between items-center bg-muted/40 text-foreground text-sm font-sans fixed inset-x-0 bottom-0">
      <span>
        &copy; {new Date().getFullYear()} Copyright — Virtual File System
      </span>
      <span>
        Desenvolvido por{' '}
        <a
          className="text-cyan-900"
          href="https://www.linkedin.com/in/vinícius-basílio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Vinícius Basílio</b>
        </a>
      </span>
    </footer>
  );
}
