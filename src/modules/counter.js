// Action 타입
// Ducks 패턴 : 액션의 이름에 접두사 넣기.

const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// Action Creator 액션 생성 함수
// 액션 생성 함수를 만들고 export 키워드를 사용해서 내보내기
export const SetDiff = (diff) =>(
 {type: SET_DIFF,diff}
)

export const increase = () =>(
    {type: INCREASE}
)

export const decrease = () =>(
    {type: DECREASE}
)

// Init State 초기 상태
const initialState ={
    number: 0,
    diff: 1
};

// Reducer 리듀서 : 액션을 발생시키는 역할
export default function counter(state = initialState, action){
    switch (action.type) {
        case SET_DIFF:
            return{
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
    
        default:
            return state;
    }
}