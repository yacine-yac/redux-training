
import { StyleContext } from './style/contextStyle';
function Achose(){

    const [ls,setLs]=useState(undefined);
    return <>
        {
        ls== "Dark"?  <LightTheme />
        : ls=="Light"
            ? <DarkTheme/>
            : <LightTheme />
        };
    </>
}