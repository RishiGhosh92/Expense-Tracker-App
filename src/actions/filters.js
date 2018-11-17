  //SET TEXT FILTER Action generator
  export const setTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text
  });
  
  //SORT BY AMOUNT Action generator
  export const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
	sortBy: "amount"
  });
  
  //SORT BY DATE Action generator
  export const sortByDate = () => ({
	type: "SORT_BY_DATE",
	sortBy: "date"
  });
  
  //SET START DATE Action generator
  export const setStartDate = (startDate = "") => ({
	type: "SET_START_DATE",
	startDate
  });
  
  //SET END DATE Action generator
  export const setEndDate = (endDate = "") => ({
	type: "SET_END_DATE",
	endDate
  });