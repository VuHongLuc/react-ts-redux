// useData.ts
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { student } from '../Types/Types';

export default function useData(): student[] {
    const listStudent = useSelector(
        (state: RootState) => state.studentList
    );

    return listStudent;
}
