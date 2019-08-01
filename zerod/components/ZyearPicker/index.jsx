import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import PropTypes from "prop-types";
import { getControl } from "../Zform/controls";

const ZyearPicker = React.forwardRef(function({ value, onChange, onPanelChange, onOpenChange, open, ...others }, ref) {
	const [openState, setOpenState] = useState(false);
	return getControl("DatePicker", {
		...others,
		mode: "year",
		value,
		open: typeof open === "boolean" ? open : openState,
		onPanelChange(value, mode) {
            typeof open !== "boolean" && setOpenState(false);
			onPanelChange && onPanelChange(value, mode);
			onChange && onChange(value, value.format("YYYY"));
		},
		onOpenChange(status) {
			typeof open !== "boolean" && setOpenState(true);
			onOpenChange && onOpenChange(status);
		},
	});
});

export default React.memo(ZyearPicker);
