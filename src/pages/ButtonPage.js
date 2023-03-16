import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success rounded className="mx-3 my-3">
          <GoBell className="mr-1" />
          Click here!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Something
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Now
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          <GoCloudDownload />
          Hide!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
