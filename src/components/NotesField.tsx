import type { ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/reduxHooks';
import { changeNotes } from '../redux/notes/notesSlice';

const NotesField = () => {
    const dispatch = useAppDispatch();
    const currentNotes = useAppSelector((state) => state.notes.value);

    const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNotes(e.target.value));
    };

    return (
        <textarea
            id="notes"
            name="notes"
            className="block w-full p-2 text-gray-900 border border-gray-200 rounded-lg bg-white text-sm outline-none focus:ring-blue-600 focus:border-blue-600"
            cols={30}
            rows={10}
            value={currentNotes}
            onChange={handleNotesChange}
        />
    );
};

export default NotesField;
