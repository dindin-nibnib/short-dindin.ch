
import {
  Route,
	useParams,
} from "react-router-dom";

export default function Id() {
	return ( 
	<>
		{useParams().id}
	</> 
	);
}
