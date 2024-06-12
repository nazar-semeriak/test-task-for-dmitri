import RadioSelect from './components/RadioSelect';
import DiscountCodeInputField from './components/DiscountCodeInputField';
import DiscountCodeGenerator from './components/DiscountCodeGenerator';
import NotesField from './components/NotesField';

const App = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-blue-50">
        <div className="flex flex-col justify-center items-center gap-3 border border-gray-300 rounded-lg ring-gray-900/5 bg-gray-50 w-96 p-6 sm:py-12">
            <h1 className="text-3xl font-bold underline">
                Application
            </h1>
            <div className="w-full flex flex-col justify-center items-start gap-1">
                <h4 className="text-xl">Choose Option</h4>
                <RadioSelect/>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
                <h4 className="text-xl">Enter Discount Code</h4>
                <DiscountCodeInputField/>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
                <h4 className="text-xl">Generate Discount Code</h4>
                <DiscountCodeGenerator/>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-1">
                <h4 className="text-xl">Add Note</h4>
                <NotesField/>
            </div>
        </div>
        </div>
    );
};

export default App;
