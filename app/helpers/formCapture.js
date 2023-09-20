
export default function captureFormValues(event, formValues) {
    const inputKey = event.target.name;
    const inputValue = event.target.value;
    formValues[inputKey] = inputValue;
    return formValues;
}