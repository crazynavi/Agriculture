import React from 'react'

const DashboardTable = ({title, success}) => {
    return (
        <div className='box-container'>
            <h4 className='box-heading'>{title}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Contract</th>
                        <th>Last</th>
                        <th>Change</th>
                        <th>Trade Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sep'22</td>
                        <td>591-2s</td>
                        <td className={!success ? 'color-danger' : 'color-success'}>-15-4</td>
                        <td>08/02/22</td>
                    </tr>
                    <tr>
                        <td>Oct'22</td>
                        <td>591-2s</td>
                        <td className={!success ? 'color-danger' : 'color-success'}>-15-4</td>
                        <td>08/02/22</td>
                    </tr>
                    <tr>
                        <td>Nov'22</td>
                        <td>591-2s</td>
                        <td className={!success ? 'color-danger' : 'color-success'}>-15-4</td>
                        <td>08/02/22</td>
                    </tr>
                    <tr>
                        <td>Dec'22</td>
                        <td>591-2s</td>
                        <td className={!success ? 'color-danger' : 'color-success'}>-15-4</td>
                        <td>08/02/22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable
