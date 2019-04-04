
import { connect } from "react-redux";

const withTheme = connect(({theme}) => ({ theme: theme.theme }));

export default withTheme;