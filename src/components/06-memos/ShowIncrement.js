import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  console.log('====================================');
  console.log('Me volvi a llamar');
  console.log('====================================');
  return (
    <div>
      <button
      className="btn btn-primary"
      onClick={increment(5)}>
        Incrementar
      </button>
    </div>
  )
}
)