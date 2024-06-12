import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { changeOption } from '../redux/options/optionsSlice';
import { E_OPTION } from '../constants/constants';

const RadioSelect = () => {
    const dispatch = useAppDispatch();
    const currentOption = useAppSelector((state) => state.options.value);

    return (
        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <li className="w-full border-b border-gray-200 rounded-t-lg">
                <div className="flex items-center ps-3">
                    <input
                        type="radio"
                        id={E_OPTION.OPTION_A}
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        value={E_OPTION.OPTION_A}
                        checked={currentOption === E_OPTION.OPTION_A}
                        onChange={() => dispatch(changeOption(E_OPTION.OPTION_A))}
                    />
                    <label
                        htmlFor={E_OPTION.OPTION_A}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                        Option A
                    </label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg">
                <div className="flex items-center ps-3">
                    <input
                        type="radio"
                        id={E_OPTION.OPTION_B}
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        value={E_OPTION.OPTION_B}
                        checked={currentOption === E_OPTION.OPTION_B}
                        onChange={() => dispatch(changeOption(E_OPTION.OPTION_B))}
                    />
                    <label
                        htmlFor={E_OPTION.OPTION_B}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                        Option B
                    </label>
                </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg">
                <div className="flex items-center ps-3">
                    <input
                        type="radio"
                        id={E_OPTION.OPTION_C}
                        name="options"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        value={E_OPTION.OPTION_C}
                        checked={currentOption === E_OPTION.OPTION_C}
                        onChange={() => dispatch(changeOption(E_OPTION.OPTION_C))}
                    />
                    <label
                        htmlFor={E_OPTION.OPTION_C}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                    >
                        Option C
                    </label>
                </div>
            </li>
        </ul>
    );
};

export default RadioSelect;
