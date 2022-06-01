import {HTTP,HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, URL_IMG_PERSON, GUIDE_IMG_EXTENSION} from '../constants/api';

// replace первый аргемент что меняем, а второй на что (в нашел случае на пустую строку) /1/ - выдаст
// "//g" - регулярное выражение глобального поиска, первый слэш экранируем обраным слэшэм в поиске
const getId = (url, category) => {
    // Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
    const checkProtocol = url => {
        if (url.indexOf(HTTPS) !== -1) {
            return HTTPS;
        }

        return HTTP;
    }

    const protocol = checkProtocol(url);
    
    const id = url
        // .replace(HTTP+SWAPI_ROOT+category,'')
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g,'')


    return id;
}

//определяем идентификатор
export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;

