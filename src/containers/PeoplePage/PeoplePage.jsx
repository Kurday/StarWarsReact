import styles from './PeoplePage.module.css';
import { getApiResource} from "../../utils/network";
import { useEffect,useState } from "react";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
// там дефолтный экспорт поэтому без фигурных скобок 
import PeopleList from '../../components/PeoplePage/PeopleList';


const PeoplePage = () => {
  const [people, setPeople] = useState(null);


  
  const getResource = async (url) => {
    // получаем json по переданному адреcу
    const res = await getApiResource(url);
    //фильтруем нужные свойства
    const peopleList = res.results.map(({name, url})=> {
      //получаем уникальный идентификатор
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      
      return {
        // если ключ и значение совпадают, то можно не писать значение 
        id,
        name,
        img
      }
    })
    setPeople(peopleList);
  }

   
  useEffect(()=>{
    getResource(API_PEOPLE);
  }, []);
  return (
    <div>
    {people && 
      <PeopleList people={people}/>
    }
      
    </div>
  )
}
export default PeoplePage;

