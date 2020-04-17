import { ADD_ARTICLE } from '../constants/action-types';
import Faker from 'faker';

const initialState = {
  articles: [{ id: 1, title: Faker.lorem.sentence(), content: Faker.lorem.paragraphs(2), color: "red", category: Faker.lorem.word() },
    { id: 2, title: Faker.lorem.sentence(), content: Faker.lorem.paragraphs(2), color: "yellow", category: Faker.lorem.word() },
    { id: 3, title: Faker.lorem.sentence(), content: Faker.lorem.paragraphs(2), color: "green", category: Faker.lorem.word() },
    { id: 4, title: Faker.lorem.sentence(), content: Faker.lorem.paragraphs(2), color: "blue", category: Faker.lorem.word() }]
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
          });
      
    }
    return state;
};
  
  export default rootReducer;