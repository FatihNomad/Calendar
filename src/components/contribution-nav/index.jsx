import React from 'react';
import './styles.css'
import ContributionDay from '../contribution-day';

const ContributionHelper = () => {
    return (
        <div>
            <div className='contribution-table-helper'>
                <span className='contribution-table-text contribution-table-small-text'>Меньше</span>
                <div className='contribution-table-helper-items'>
                    <ContributionDay contributionCount={0} isLegend tooltipText={'No contribution'} />
                    <ContributionDay contributionCount={9} isLegend tooltipText={'1-9 contributions'} />
                    <ContributionDay contributionCount={19} isLegend tooltipText={'10-19 contributions'} />
                    <ContributionDay contributionCount={29} isLegend tooltipText={'20-29 contributions'} />
                    <ContributionDay contributionCount={39} isLegend tooltipText={'30+ contributions'} />
                </div>
                <span className='contribution-table-text contribution-table-small-text'>Больше</span>
            </div>
        </div>
    );
};

export default ContributionHelper;