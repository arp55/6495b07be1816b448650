import { shallow } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import Country from "../screens/Country";


const mockStore=createMockStore()
const store=mockStore({})

const createTestProps=()=>({
    navigation:{
        navigate:jest.fn()
    }
})

describe('Country Screen', () => {
    describe('rendering', () => {
        const props=createTestProps();

        const wrapper=shallow(
            <Provider store={store}>
                <Country {...props}/>
            </Provider>
        )

        it('should render the screen',()=>{
            expect(wrapper.find(".country-screen")).toHaveLength(0)
        })
    })
    
})
