async function getData() {
  const res = await fetch("https://catfact.ninja/fact", { next: { revalidate: 20 } });
  return res.json();
}

export default getData


// All cache options:
// // Generates statically like getStaticProps.
// fetch(URL, { cache: 'force-cache' });

// // Generates server-side upon every request like getServerSideProps.
// fetch(URL, { cache: 'no-store' });

// // Generates statically but revalidates every 20 seconds
// fetch(URL, { next: { revalidate: 20 } });