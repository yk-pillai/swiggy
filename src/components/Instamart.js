import Section from "./Section";
import { useState } from "react";

const Instamart = () => {
  const [whatsVisible, setWhatsVisible] = useState("");

  return (
    <div className="">
      <Section
        title="About"
        desc="adhk adlskjfhlkajsd asdkjfajdhsfkjhkas asdjfhjkadghsfjk"
        isVisible={whatsVisible === "about"}
        setWhatsVisible={() =>
          setWhatsVisible(whatsVisible === "about" ? "" : "about")
        }
      />
      <Section
        title="Career"
        desc="adhk adlskjfhlkajsd asdkjfajdhsfkjhkas asdjfhjkadghsfjk"
        isVisible={whatsVisible === "career"}
        setWhatsVisible={() =>
          setWhatsVisible(whatsVisible === "career" ? "" : "career")
        }
      />
      <Section
        title="Product"
        desc="adhk adlskjfhlkajsd asdkjfajdhsfkjhkas asdjfhjkadghsfjk"
        isVisible={whatsVisible === "product"}
        setWhatsVisible={() =>
          setWhatsVisible(whatsVisible === "product" ? "" : "product")
        }
      />
    </div>
  );
}

export default Instamart;
