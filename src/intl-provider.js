import {IntlProvider, addLocaleData} from 'react-intl';
import {connect} from 'react-redux';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import {getMessages} from './lang';
import it from 'react-intl/locale-data/it';
import pl from 'react-intl/locale-data/pl';
import pt from 'react-intl/locale-data/pt';
import ru from 'react-intl/locale-data/ru';
import tr from 'react-intl/locale-data/tr';
import zh from 'react-intl/locale-data/zh';

addLocaleData([
    ...de,
    ...es,
    ...fr,
    ...it,
    ...pl,
    ...pt,
    ...ru,
    ...tr,
    ...zh
]);

const french= {
    locale: 'FR',
    messages:  getMessages().FR
}
const english= {
    locale: 'ES',
    messages:  getMessages().ES
}

const getStateToBindToContainerProps = function(state){
    console.log("from intl state :",state);
    console.log("from intl state :",this.props);
    console.log("from intl state :",state.langReducer.lang);
    const lang=state.langReducer.lang;
   return lang=='ES' ? english : french;
}

export default connect(getStateToBindToContainerProps)(IntlProvider);
