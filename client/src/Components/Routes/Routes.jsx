import { Route, Switch } from "react-router"
import { HomePage } from "../HomePage/HomePage.jsx"
import {Continueoptions} from "../ContinueOption/Continueoptions"
import {Loginthroughphone} from "../Loginthroughphone/Loginthroughphone.jsx"
import {Enterotp} from "../EnterOTP/Enterotp.jsx"
import { Postloading } from "../UpdatingAd/Loading/Postloading.jsx";
import AdNotPosted from "../UpdatingAd/AdNotPosted/AdNotPosted"
import { PaymentSuccessfull } from "../UpdatingAd/PaymentSuccesfull/PaymentSuccessfull";
import CardMethod from "../UpdatingAd/CardMethod/CardMethod"
import {Updatingad} from "../UpdatingAd/Updating/Updatingad"
import PaymentMethod from "../UpdatingAd/PaymentMethod/PaymentMethod";
import { PostYourAd } from '../PostYourAd/PostYourAd.jsx';

export const Routes = () => {
    return (<>
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/Continueoptions" exact>
                <Continueoptions />
            </Route>
            <Route path="/Loginthroughphone" exact>
                <Loginthroughphone />
            </Route>
            <Route path="/Enterotp" exact >
                <Enterotp />
            </Route>
            <Route path="/postyouradd" exact>
                <PostYourAd />
            </Route>
            <Route path="/postloading" exact>
                <Postloading />
            </Route>
            <Route path="/postingAnotherAd">
                <AdNotPosted />
            </Route>
            <Route path="/paymentsuccessfull" exact>
                <PaymentSuccessfull />
            </Route>
            <Route path="/cardmethod" exact>
                <CardMethod />
            </Route>
            <Route path="/updatingad">
                <Updatingad />
            </Route>
            <Route path="/paymentmethod" exact>
                <PaymentMethod />
            </Route>
    </Switch>
    </>);
}