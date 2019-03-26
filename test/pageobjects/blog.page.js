import Page from './page';
import config from '../config/suite.mocha.conf'

class blog extends Page {

    getDataLayer() {
        browser.url('http://localhost:8000/app/blog')
        browser.waitUntil(() => {
            return $('.blog-post-title').isDisplayed()
        }, 5000);
    };
}
export default new blog();