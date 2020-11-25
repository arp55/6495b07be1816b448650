import { shallow } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import Weather from "../screens/Weather";


const mockStore=createMockStore()
const store=mockStore({})

const createTestProps=()=>({})

describe('Weather Screen', () => {
    describe('rendering', () => {
        const props=createTestProps();

        const wrapper=shallow(
            <Provider store={store}>
                <Weather {...props}/>
            </Provider>
        )

        it('should render the screen',()=>{
            expect(wrapper.find(".weather-screen")).toHaveLength(0)
        })
    })
    
})
