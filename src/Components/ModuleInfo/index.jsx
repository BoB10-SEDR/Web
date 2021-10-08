import '@Styles/moduleInfo.css';
import Slider from '@Components/Slider';
import Profile from '@Components/ModuleInfo/Profile';

const ModuleInfo = props => {
    const { modules = [] } = props;
    //TODO_S :: dummy 데이터 제작 후 연동

    return (
        <div className='moduleInfo'>
            <ModuleSlider data={modules} />
            <Profile />
        </div>
    );
};

const ModuleSlider = props => {
    const { data } = props;
    return (
        <div className='moduleSlider'>
            <Slider data={data} />
        </div>
    );
};

export default ModuleInfo;
