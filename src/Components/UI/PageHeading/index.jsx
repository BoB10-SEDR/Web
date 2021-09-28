import '@Styles/pageHeading.css';

const PageHeading = props => {
    const { title = 'Untitled', noToggle = false } = props;


    return (
        <div className='pageHeading'>
            <h1 className='pageName'>{title}</h1>

            {!noToggle && (
                <a href='#' className='generateReportButton'>
                    <i className='fas fa-download fa-sm text-white-50'></i>
                    {` Generate Report`}
                </a>
            )}

        </div>
    );
};

export default PageHeading;
