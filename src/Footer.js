export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>&copy; {currentYear}</p>
    </div>
  );
}
