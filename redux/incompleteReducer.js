const initialState = [
    {
      summary:'Submit my resume',
      discription:'',
      dueDate:'Today, 17.00',
      isChecked:false,
    },
    {
      summary:'go to office and lunch with friends',
      discription:'',
      dueDate:'⏰ Today, 20.00',
      isChecked:false,
    },
    {
      summary:'Meeting with Jack',
      discription:'',
      dueDate:'Today, 17.00',
      isChecked:false,
    },
    {
      summary:'Buy a chocolate for Mom',
      discription:'',
      dueDate:'Today, 17.00',
      isChecked:false,
    },
]

export default function incomplete(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_INCOMPLETE':
        return action.payload
      default:
        return state
    }
}