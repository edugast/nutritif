import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Gastronomy Browser</h1>
        <p style={styles.subtitle}>Discover recipes, restaurants, and gastronomy news!</p>
      </header>

      {/* Search Bar */}
      <div style={styles.searchSection}>
        <input 
          type="text" 
          placeholder="Search for recipes or restaurants..." 
          style={styles.searchBar} 
        />
        <button style={styles.searchButton}>Search</button>
      </div>

      {/* Navigation Buttons */}
      <div style={styles.navButtons}>
        <Link href="/recipes">
          <button style={styles.button}>Find Recipes</button>
        </Link>
        <Link href="/restaurants">
          <button style={styles.button}>Discover Restaurants</button>
        </Link>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#343a40',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#6c757d',
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  searchBar: {
    width: '60%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    marginRight: '10px',
  },
  searchButton: {
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
