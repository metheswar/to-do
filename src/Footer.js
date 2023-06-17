export default function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>you have {props.length} works</p>
    </div>
  );
}
