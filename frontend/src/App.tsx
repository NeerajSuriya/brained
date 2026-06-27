import { Button } from "./components/ui/Button"
import "./index.css";
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon";
import { Card } from "./components/Card";
function App(){
    return <>
    <Button startIcon={<ShareIcon size="md"/>} size= "sm" variant="primary" text="Share"></Button>
    <Button startIcon={<PlusIcon size="md"/>} size= "md" variant="secondary" text="Add Content"></Button>
    <Card type="x" link="https://x.com/MrBeast/status/1523674759925760000?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1523674759925760000%7Ctwgr%5Ed29c57e91a3edbcd31ead20d57d38da91668bceb%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.x.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FMrBeast%2Fstatus%2F1523674759925760000" title="first tweet" />
    <Card type="youtube" link="https://youtu.be/rzQAUODAd4s?si=mJ5wpi8KI0TdhRhG" title="first video" />
    </>
}

export default App