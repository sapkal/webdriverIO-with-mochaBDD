import assert from 'assert';
import blog from '../pageobjects/blog.page';
import { getDataLayer, getEvent } from '../../utilities/ga-util'

describe('This is a test for google analystics', function () {
    it('should provide the dataLayer object', function () {
        blog.getDataLayer();
        // const val = browser.execute(function () {
        //     return window.dataLayer;
        // })
        console.info(getEvent('gtm.dom'));
    });
});