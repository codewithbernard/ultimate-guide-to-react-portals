import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <main className="main">
      <Modal
        visible={showModal}
        title="Portal Modal"
        description="I was rendered usign portals"
        onClose={closeModal}
      />
      <button onClick={openModal}>Show Modal</button>
    </main>
  );
};

export default App;
