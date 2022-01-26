import ReactDOM from "react-dom";

const Modal = ({ visible, title, description, onClose }) => {
  const handleClick = (event) => event.stopPropagation();

  // Don't render if visible equals false
  if (!visible) return null;

  return ReactDOM.createPortal(
    <section className="overlay" onClick={onClose}>
      <article className="modal" onClick={handleClick}>
        <header>
          <strong>{title}</strong>
        </header>
        <main>
          <p>{description}</p>
        </main>
      </article>
    </section>,
    document.getElementById("root")
  );
};

export default Modal;
