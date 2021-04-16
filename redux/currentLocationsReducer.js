const initialState = [
    {
      summary:'Karachi, Pakistan',
      discription:'',
      dueDate:'Today, 17.00',
      isChecked:true,
    }
  ]
  
  export default function completed(state = initialState, action) {
      switch (action.type) {
        case 'UPDATE_CURRENTLOCATION':
          return action.payload
        default:
          return state
      }
  }