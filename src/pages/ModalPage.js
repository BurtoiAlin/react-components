import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        congue massa. Mauris dapibus ante ut posuere eleifend. Sed bibendum
        placerat vulputate. Pellentesque lacinia felis id dolor ultricies, nec
        sodales magna fringilla. Praesent faucibus ullamcorper hendrerit. Etiam
        elit enim, aliquam quis egestas at, volutpat in dolor. Integer a sapien
        id massa convallis imperdiet. Sed feugiat pulvinar risus at efficitur.
        Aenean sem dui, rutrum sit amet ligula volutpat, gravida cursus ligula.
        Fusce sed vulputate sem, quis venenatis tellus. Cras elementum sapien in
        arcu eleifend mollis.
      </p>
    </div>
  );
}

export default ModalPage;
