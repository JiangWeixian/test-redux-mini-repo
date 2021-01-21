/**
 * Examples for rematch commmon
 */
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import { RootState, Dispatch } from '@/typings/rematch'

const mapStateX = (state: RootState) => {
  return {
    x: state.common.x,
  }
}

const mapStateY = (state: RootState) => {
  return {
    y: state.common.y,
  }
}

const mapDispatch = ({ common }: Dispatch) => {
  return {
    increment: () => common.increment(1),
    incrementAsync: () => common.incrementAsync(1),
  }
}

const ButtonA = () => {
  const dispatch = useDispatch<Dispatch>()
  return <button onClick={() => dispatch.common.increment(1)}>increment</button>
}

const _ButtonB = () => {
  console.log('b')
  return <button>incrementAsync</button>
}

const ButtonB = connect(mapStateY, mapDispatch)(_ButtonB)

type CountProps = Partial<ReturnType<typeof mapStateX> & ReturnType<typeof mapDispatch>>

const Count = (props: CountProps) => {
  const [cnt, setCnt] = useState(0)
  return (
    <div>
      The count is {props.x}/{cnt}
      <button onClick={() => setCnt(prev => prev + 1)}>incrementp</button>
      <ButtonA />
      <ButtonB />
    </div>
  )
}

export default connect(mapStateX, mapDispatch)(Count)
