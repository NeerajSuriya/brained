import { Button } from "./components/ui/Button"
import "./index.css";
import { PlusIcon } from "./components/icons/PlusIcon"
import { ShareIcon } from "./components/icons/ShareIcon";
function App(){
    return <>
    <Button startIcon={<ShareIcon size="md"/>} size= "sm" variant="primary" text="Share"></Button>
    <Button startIcon={<PlusIcon size="md"/>} size= "md" variant="secondary" text="Add Content"></Button>
    <Button size= "lg" variant="secondary" text="Add Content"></Button>
    </>
}

export default App