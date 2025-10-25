import siteData from "@/data/site.json";

export function PageFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {siteData.name}. Crafted for Vercel.
      </p>
    </footer>
  );
}
