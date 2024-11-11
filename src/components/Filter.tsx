import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className=' flex gap-6 flex-wrap'>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>type</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <input type="text" name="min" placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <input type="text" name="max" placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'/>
            <select name="Size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Size</option>
                <option value="Physical">Size</option>
                <option value="Digital">Size</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Color</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>Category</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                <option>All Filters</option>
                <option value="Physical">Physical</option>
                <option value="Digital">Digital</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400'>
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
            </select>
            </div>
        
        
    </div>
  )
}

export default Filter