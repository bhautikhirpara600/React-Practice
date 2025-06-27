import { Component } from 'react';

class Counters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0
        }
    }

    render() {
        const { title, name1, name2 } = this.props
        const { count1, count2 } = this.state
        return (
            <>
                <h1 className='bg-orange-500 text-3xl text-center font-bold p-2'>{title}</h1>
                <div className='flex justify-center gap-x-12'>
                    <div className='mt-4 flex flex-col items-center'>
                        <h2 className='bg-green-500 text-2xl text-center font-semibold w-full px-2'>{name1}</h2>
                        <div className='flex mt-4'>
                            <button onClick={() => (this.setState({ count1: count1 - 1 }))} className='bg-purple-300 px-4 py-2 rounded-xl font-semibold cursor-pointer' >Minus</button>
                            <p className='text-2xl font-semibold px-2'>{count1}</p>
                            <button onClick={() => (this.setState({ count1: count1 + 1 }))} className='bg-purple-300 px-4 py-2 rounded-xl font-semibold cursor-pointer' >Plus</button>
                        </div>
                    </div>

                    <div className='mt-4 flex flex-col items-center'>
                        <h2 className='bg-green-500 text-2xl text-center font-semibold w-full px-2'>{name2}</h2>
                        <div className='flex mt-4'>
                            <button onClick={() => (this.setState({count2: count2 - 1}))} className='bg-purple-300 px-4 py-2 rounded-xl font-semibold cursor-pointer' >Minus</button>
                            <p className='text-2xl font-semibold px-2'>{count2}</p>
                            <button onClick={() => (this.setState({count2: count2 + 1}))} className='bg-purple-300 px-4 py-2 rounded-xl font-semibold cursor-pointer' >Plus</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Counters