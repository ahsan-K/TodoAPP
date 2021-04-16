const initialState = [
    {
      summary:'Submit my resume',
      discription:'',
      dueDate:'Today, 17.00',
      isChecked:true,
    },
    {
      summary:'go to office and lunch with friends',
      discription:'',
      dueDate:'Today, 20.00',
      isChecked:true,
    }
  ]
  
  export default function completed(state = initialState, action) {
      switch (action.type) {
        case 'UPDATE_PREVIOUSLOCATION':
          return action.payload
        default:
          return state
      }
  }